import { getPage, builder } from "../../../../sanity/sanity-utils"
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

export async function Description({ slug }: { slug: string }) {
  const page = slug && await getPage(slug)
  console.log(page && page.body)
  return (
    <section className="w-full mt-3 py-6 gap-8 flex flex-col bg-stone-200 px-[22px] font-inter text-[#3C3A1E] text-base">
      <h2 className="text-center text-xl font-medium leading-[32px]">DESCRIÇÃO DO PRODUTO</h2>

      {
        page && (
          <PortableText
            value={page.body}
            components={{
              block: {
                h1: ({ children }) => (
                  <h1 className="text-3xl text-slate-900 font-bold leading-9 pb-2">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl text-slate-900 font-bold leading-8 pb-2">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl text-slate-900 font-bold leading-6 pb-2">
                    {children}
                  </h3>
                ),

                h4: ({ children }) => (
                  <h4 className="text-lg text-slate-900 font-bold leading-6 pb-2">
                    {children}
                  </h4>
                ),
                normal: ({ children }) => (
                  <p className="text-base text-slate-900 font-normal leading-6 pb-2">
                    {children}
                  </p>
                ),
              },
              listItem: {
                number: ({ children }) => (
                  <li style={{ listStyleType: 'decimal' }}>{children}</li>
                ),
                bullet: ({ children }) => (
                  <li style={{ listStyleType: 'disc', marginLeft: '16px' }}>
                    {children}
                  </li>
                ),
              },
              marks: {
                link: ({ value, children }) => (
                  <a
                    href={`${value.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline"
                  >
                    {children}
                  </a>
                ),
              },
              types: {
                image: ({ value }) => (
                  <div className="text-4xl pb-2">
                    <Image
                      src={builder.image(value).toString()}
                      alt={value.alt}
                      width={1000}
                      height={1000}
                    />
                  </div>
                ),
              },
            }}
          />
        )
      }


    </section>
  )
}