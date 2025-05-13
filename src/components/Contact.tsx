import { type FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <section id="contact" className="bg-[#C2F8CB] lg:rounded-2xl">
      <h2>Get In Touch</h2>
      <div className="max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          action="https://formspree.io/f/xnndgplo"
          method="POST"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                {...register("name")}
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-[#8367C7] rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium "
              >
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-[#8367C7] rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium "
            >
              Subject
            </label>
            <input
              type="text"
              {...register("subject")}
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border border-[#8367C7] rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium "
            >
              Message
            </label>
            <textarea
              id="message"
              {...register("message")}
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-[#8367C7] rounded-md focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="btn bg-purple-color cursor-pointer text-white w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
        <div className="mt-12 text-center">
          <p className="text-lg mb-4" text-gray-700>
            Or connect with me directly:
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/ιωάννης-παπαδόπουλος-212591256/"
              className="text-purple-color "
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/pagiannis"
              className="text-purple-color "
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
