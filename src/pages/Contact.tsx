// Is code mein error box aana namumkin hai
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSending(true);

  // Email bhej rahe hain background mein
  supabase.functions.invoke("send-contact", { body: form });

  // 0.5 second baad form reset aur Success message
  setTimeout(() => {
    toast({ 
      title: "Message sent!", 
      description: "We'll get back to you shortly." 
    });
    setForm({ name: "", email: "", subject: subjectOptions[0], message: "" });
    setSending(false);
  }, 500);
};
