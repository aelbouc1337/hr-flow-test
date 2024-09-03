const Loading = () => {
  return (
    <div className="flex flex-col justify-center gap-10 items-center">
      <div className="text-3xl text-primary">Loading</div>
      <div className="animate-spin rounded-full border-primary border-b-8 w-44 h-44"></div>
    </div>
  );
};

export default Loading;
