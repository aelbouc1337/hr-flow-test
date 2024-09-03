const EmptyList = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="assets/empty.png" width={200} height={200} alt="no result" />
      <h3 className="font-bold text-xl text-center">
        Sorry, no matches found. You might want to try different keywords or
        filters.
      </h3>
    </div>
  );
};

export default EmptyList;
