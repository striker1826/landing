interface StoreBtnProps {
  children: React.ReactNode;
  bg: string;
  onClick: () => void;
}

const StoreBtn = ({ children, bg, onClick }: StoreBtnProps) => {
  return (
    <button
      onClick={onClick}
      className="py-[13px] px-[20px] rounded-[999px]"
      style={{ backgroundColor: bg }}
    >
      <div className="flex gap-[2px] items-center">{children}</div>
    </button>
  );
};

export default StoreBtn;
