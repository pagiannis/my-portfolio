export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg mb-4">
            Hello! I'm a junior full stack web dev passionate about creating
            modern/creative websites. I have experience with React.js, Node.js,
            Express.js, Git and i know the basics of realtional (SQL) and non
            relational (MongoDB) databases. Also I'm always eager to learn new
            technologies and frameworks. Additionaly I know how to use Postman.
          </p>
          <p className="text-lg mb-4">
            Currently, I'm working on a project called "fizzy-jeli" which is a
            simulation of a real-world e-shop. It is a full-stack application
            built with React, TypeScript, and Node.js.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me outside exploring nature,
            hiking, or fishing. I also love all types of creativity/art so a
            fresh/groovy music album or a good movie always makes me excited.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full bg-blue-100 overflow-hidden border-4 border-[#8367C7]">
            {/* Placeholder for your image */}
            <div className="w-full h-full bg-purple-700 flex items-center justify-center text-4xl text-white">
              <img src="/profile.png" alt="Profile Pic"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
