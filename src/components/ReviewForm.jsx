"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReviewForm({Id }) {
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // ReviewForm.jsx এর handleSubmit ফাংশনটি এভাবে আপডেট করুন
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Id, userName, comment }),
  });

  // রেসপন্সটি কনসোল করুন
  const data = await res.json();
  console.log("Response from server:", data); 

  setLoading(false);

  if (res.ok) {
    setComment("");
    setUserName("");
    router.refresh();
  } else {
    // এখানে এররটি স্পষ্টভাবে দেখুন
    console.error("Submission failed:", data);
    alert("Failed to submit feedback.");
  }
};

  return (
    <div className="mt-8 text-foreground">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8  text-foreground  rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-foreground">Leave a Feedback</h3>
        
        <div className="space-y-4">
          <input
            required
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-foreground"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          
          <textarea
            required
            placeholder="Write your feedback here..."
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all h-32 resize-none"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full mt-6 bg-green-500 text-white font-semibold py-4 rounded-xl hover:bg-green-500 active:scale-[0.98] transition-all text-foreground"
        >
          {loading ? "Submitting..." : "Post Review"}
        </button>
      </form>
    </div>
  );
}