import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
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
            <DialogContent className="max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-xl border-0">
                <DialogHeader className="border-b border-gray-200 pb-4">
                    <DialogTitle className="text-2xl font-serif text-navy">
                        {title}
                    </DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-[70vh] pr-4">
                    <div className="prose prose-sm sm:prose lg:prose-lg max-w-none py-6 px-4">
                        <ReactMarkdown
                            components={{
                                h1: ({ children }) => <h1 className="text-2xl font-serif text-navy mb-4">{children}</h1>,
                                h2: ({ children }) => <h2 className="text-xl font-serif text-navy mt-6 mb-3">{children}</h2>,
                                p: ({ children }) => <p className="text-sm sm:text-base mb-4 leading-relaxed text-gray-600">{children}</p>,
                                ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">{children}</ul>,
                                li: ({ children }) => <li className="text-sm sm:text-base">{children}</li>,
                                strong: ({ children }) => <strong className="font-semibold text-navy">{children}</strong>,
                                em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
                                a: ({ children, href }) => (
                                    <a href={href} className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                                        {children}
                                    </a>
                                ),
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};

export default PrivacyTermsModal; 