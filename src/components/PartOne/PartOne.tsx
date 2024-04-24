import Form from "./Form";
import Header from "./Header";
import Content from "./Content";

const PartOne = () => {
  return (
    <main className="h-[936px]">
      <Header />
      <section className="h-[88px] pt-[108px] px-[80px] gap-[80px]">
        <Content />
        <Form />
      </section>
    </main>
  );
};

export default PartOne;
