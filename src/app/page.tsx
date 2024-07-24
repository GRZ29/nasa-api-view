import BoxReveal from "@/components/magicui/box-reveal";

export default function page() {

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <div className="h-full w-full items-center justify-center overflow-hidden pt-8">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-[3.5rem] font-semibold aaa">
              Nasa API Explorer
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h3 className="mt-[.5rem] text-[1rem]">
              This front-end project was developed to create an interactive user interface for exploring images and data provided by NASA`s public API. I utilized the following technologies for its implementation:
            </h3>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-[1.5rem]">
              <h3 className="mt-[.5rem] text-[1rem]">
                Technologies Used
              </h3>
              <p>
                <span className="font-semibold text-[#5046e6] mr-2">NextJS</span>
                <span className="font-semibold text-[#5046e6] mr-2">TanStack Query</span>
                <span className="font-semibold text-[#5046e6] mr-2">Typescript</span>
                <span className="font-semibold text-[#5046e6] mr-2">Tailwind CSS</span>
                <span className="font-semibold text-[#5046e6] mr-2">Shadcn/ui</span>
                <span className="font-semibold text-[#5046e6] mr-2">Magic UI</span>
                /
                <span className="font-semibold text-[#5046e6] mr-2 ml-2">GutHub Pages Workflow(Pipeline)</span>
              </p>
            </div>
          </BoxReveal>
        </div>
      </div>
      {/* <Render/> */}
    </section>
  );
}
