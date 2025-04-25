import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface PrivacyTermsModalProps {
    title: string;
    content: string;
    trigger: React.ReactNode;
}

const PrivacyTermsModal = ({ title, content, trigger }: PrivacyTermsModalProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-playfair text-navy">{title}</DialogTitle>
                </DialogHeader>
                <div className="mt-6 text-gray-600">
                    <ReactMarkdown
                        components={{
                            h1: ({ children }) => <h1 className="text-xl font-playfair text-navy mb-4">{children}</h1>,
                            h2: ({ children }) => <h2 className="text-lg font-playfair text-navy mt-6 mb-3">{children}</h2>,
                            p: ({ children }) => <p className="text-sm sm:text-base mb-4 leading-relaxed">{children}</p>,
                            ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
                            li: ({ children }) => <li className="text-sm sm:text-base">{children}</li>,
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PrivacyTermsModal; 