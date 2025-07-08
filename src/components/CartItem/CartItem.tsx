export const CartItem = () => {
  return (
    <div className="w-full min-w-[288px] bg-white border border-gray-200 shadow-sm p-4 relative">
      <div className="sm:hidden">
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                ×
              </button>
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  src="/public/img/phones/apple-iphone-11-pro-max/apple-iphone-11-pro-max.webp"
                  alt="Apple iPhone 11 Pro Max"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50">
                −
              </button>
              <span className="w-8 text-center text-sm font-medium">1</span>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50">
                +
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900 leading-tight">
                Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
              </h3>
            </div>
            <div className="text-right self-end">
              <div className="text-lg font-bold text-gray-900">$1099</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex items-center gap-4">
        <button className="text-gray-400 hover:text-red-500 transition-colors">
          ×
        </button>
        <div className="w-20 h-20 flex-shrink-0">
          <img
            src="/public/img/phones/apple-iphone-11-pro-max/apple-iphone-11-pro-max.webp"
            alt="Apple iPhone 11 Pro Max"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 leading-tight">
            Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50">
              −
            </button>
            <span className="w-8 text-center text-sm font-medium">1</span>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50">
              +
            </button>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-gray-900">$1099</div>
          </div>
        </div>
      </div>
    </div>
  );
};
