import Form from "./Form";
import Table from "./Table";
import Header from "./Header";
import Content from "./Content";

const PartOne = () => {
  return (
    <main className="h-[936px]">
      <Header />
      <section className="h-[639px] pt-[108px] px-[80px] gap-[80px]">
        <Content translationKey="PartOne" title="title" description="description" />
        <div className="h-[419px] gap-[90px] flex justify-between">
          <Form />
          <Table />
        </div>
      </section>
    </main>
  );
};

export default PartOne;
