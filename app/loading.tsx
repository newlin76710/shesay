export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-rose/20 border-t-rose" />
        <p className="text-sm text-plum/50">載入中...</p>
      </div>
    </div>
  );
}
