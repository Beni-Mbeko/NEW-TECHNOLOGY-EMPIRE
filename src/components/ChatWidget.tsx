import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-card rounded-2xl shadow-lg border border-border z-50 animate-scale-up overflow-hidden">
          {/* Header */}
          <div className="bg-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <MessageCircle size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-primary-foreground">Assistant NTE</h4>
                <p className="text-primary-foreground/70 text-xs">En ligne • Répond instantanément</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              aria-label="Fermer le chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="p-4 h-72 overflow-y-auto bg-muted/30">
            <div className="flex gap-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground text-xs font-bold">N</span>
              </div>
              <div className="bg-card rounded-xl rounded-tl-none p-3 shadow-sm max-w-[80%]">
                <p className="text-sm">
                  Bonjour ! 👋 Je suis l'assistant virtuel de New Technology Empire. 
                  Comment puis-je vous aider aujourd'hui ?
                </p>
              </div>
            </div>

            <div className="flex gap-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground text-xs font-bold">N</span>
              </div>
              <div className="bg-card rounded-xl rounded-tl-none p-3 shadow-sm max-w-[80%]">
                <p className="text-sm">
                  Vous pouvez me poser des questions sur nos services de chatbots IA, 
                  demander un devis, ou prendre rendez-vous avec notre équipe.
                </p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tapez votre message..."
                className="flex-1 px-4 py-2 rounded-full border border-border bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              <Button size="icon" className="rounded-full flex-shrink-0">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50 flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-muted text-foreground rotate-0' 
            : 'bg-primary text-primary-foreground hover:scale-110'
        }`}
        style={{
          boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-glow)',
        }}
        aria-label={isOpen ? 'Fermer le chat' : 'Ouvrir le chat'}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
};

export default ChatWidget;
