"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Phone,
  Loader2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/data";

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/ai-chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: `Здравствуйте! Я AI-помощник автосервиса "644 АВТО". 

Опишите проблему с вашим автомобилем, и я помогу:
• Определить возможную причину
• Оценить примерную стоимость ремонта
• Записать вас на диагностику

Что вас беспокоит?`
      }
    ]
  });

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const quickQuestions = [
    "Стук в подвеске",
    "Горит Check Engine",
    "Не работает кондиционер",
    "Нужен сход-развал"
  ];

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 flex items-center justify-center ${isOpen ? 'hidden' : ''}`}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-48px)] sm:w-[400px] h-[600px] max-h-[calc(100vh-48px)] bg-background rounded-2xl shadow-2xl border border-border/50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/50 bg-primary text-primary-foreground rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">AI-Помощник</div>
                  <div className="text-xs text-primary-foreground/70">644 АВТО</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-primary-foreground/10 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === "user" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted"
                  }`}>
                    {message.role === "user" ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-muted rounded-2xl px-4 py-3">
                    <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-destructive/10 text-destructive rounded-xl p-3 text-sm">
                  Произошла ошибка. Попробуйте позже или позвоните нам.
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => {
                        const fakeEvent = {
                          target: { value: question }
                        } as React.ChangeEvent<HTMLInputElement>;
                        handleInputChange(fakeEvent);
                        setTimeout(() => {
                          const form = document.getElementById('chat-form') as HTMLFormElement;
                          form?.requestSubmit();
                        }, 100);
                      }}
                      className="px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 text-xs font-medium text-foreground transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form
              id="chat-form"
              onSubmit={handleSubmit}
              className="p-4 border-t border-border/50"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Опишите проблему..."
                  className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !input.trim()}
                  className="w-12 h-12 rounded-xl"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </form>

            {/* Call CTA */}
            <div className="px-4 pb-4">
              <a
                href={`tel:${companyInfo.phones[0].replace(/\D/g, "")}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-sm font-medium text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                Позвонить: {companyInfo.phones[0]}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
