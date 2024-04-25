export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <div className="container py-24 lg:py-32">
        {/* Grid */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-laranja">
              Financeiro
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Equipe responsável pelos chamados relacionados ao módulo Financeiro do ERP i4Pro.
            </p>
            {/* Brands */}
            <div className="mt-6 lg:mt-12">
             
            </div>
            {/* End Brands */}
          </div>
          {/* End Col */}
          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img
              className="w-full rounded-xl"
              src="https://placehold.co/700x540"
              alt="Image Description"
            />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
}
