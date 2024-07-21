import Render from "./Render";

export default function page() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Here a title about this project 
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Here a description of the project and why i did it 
        </p>
      </div>
      <Render/>
    </section>
  );
}
