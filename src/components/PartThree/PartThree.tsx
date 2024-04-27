import Content from './Content';
import TextEditor from './TextEditor';
import Footer from './Footer';

const PartThree = () => {
  return (
    <main>
      <section className="h-[749px]">
        <div className=" flex flex-col pt-[120px] px-[118px] gap-20">
          <Content />
          <TextEditor />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default PartThree