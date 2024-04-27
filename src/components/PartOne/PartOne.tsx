import Form from "./Form";
import Table from "./Table";
import Header from "./Header";
import Content from "./Content";



const PartOne = () => {
  return (
    <main className="h-[936px] ">
      <Header />
      <section className="h-[639px] flex flex-col pt-[208px] px-20 gap-20">
        <Content />
        <div className="gap-[109px] flex justify-between">
          <Form />
          <Table />
        </div>
      </section>
    </main>
  );
};

export default PartOne;
