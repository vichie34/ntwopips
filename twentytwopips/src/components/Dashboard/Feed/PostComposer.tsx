import { useState } from "react";
import Avatar from "../ui/Avater";

type Props = {
    onPost: (text: string, asset: string) => void;
};

export default function PostComposer({ onPost }: Props) {
    const [text, setText] = useState("");
    const [asset, setAsset] = useState("");

    const handleSubmit = () => {
        if (!text.trim() || !asset) return;

        onPost(text, asset);
        setText("");
        setAsset("");
    };

    return (
        <div className="border-b border-gray-200 p-4 flex gap-3 bg-white dark:bg-gray-900">
            <Avatar src="/avatar.png" size={45} />

            <div className="flex-1">
                <textarea
                    placeholder="Share your market thoughts..."
                    className="w-full resize-none outline-none border-b mb-3 pb-2 bg-transparent text-gray-900 dark:text-gray-100"
                    rows={2}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <div className="flex justify-between items-center">
                    <select
                        className="border px-3 py-1 rounded-lg bg-white dark:bg-gray-800"
                        value={asset}
                        onChange={(e) => setAsset(e.target.value)}
                    >
                        <option value="">Select Asset</option>
                        <option>BTC/USD</option>
                        <option>ETH/USD</option>
                    </select>

                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
                        disabled={!text.trim() || !asset}
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
}
