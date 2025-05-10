export const AvailableOn = () => {
  return (
    <div className="mt-56 mb-32">
      <h2 className="text-4xl font-bold text-center text-sky-500 mb-8">
        Now Available on
      </h2>
      <div className="flex flex-col sm:flex-none justify-center mt-10 items-center gap-10">
        <img
          src="https://kalihsignature.com/wp-content/uploads/2024/07/logo-gofood.png"
          alt="GoFood"
          className="h-20 w-auto"
        />
        <img
          src="https://kalihsignature.com/wp-content/uploads/2024/07/grabfood-vector-logo-150x150.webp"
          alt="GrabFood"
          className="h-28 w-auto"
        />
        <img
          src="https://kalihsignature.com/wp-content/uploads/2024/07/shopee-food-1024x256.png"
          alt="ShopeeFood"
          className="h-20 w-auto"
        />
      </div>
    </div>
  );
};
