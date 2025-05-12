export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#C2F8CB] lg:rounded-b-2xl"
    >
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-[#8367C7]">Giannis</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A junior web developer currenly studying at the Department of
          Information and Electronic Engineering, IHU
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="btn text-white bg-purple-color transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn border border-purple-600 text-black bg-white hover:bg-pueple-50"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
