export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col flex-1 items-center justify-center min-h-[50vh]"> 
      {children}
    </section>
  )
}