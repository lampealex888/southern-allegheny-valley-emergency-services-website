export default function Title(props: { title: string }) {
  return (
    <>
      <h1 className="flex justify-center items-center text-5xl font-bold italic min-h-36">
        {props.title}
      </h1>
    </>
  );
}
