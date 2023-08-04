import { Header } from "@/app/components/Header";
import { IconsCarrossel } from "@/app/components/product/IconsCarrossel";
import { ProductImgs } from "@/app/components/product/ProductImgs";

export default async function Page() {
  const images = [{
    url: 'https://s3-alpha-sig.figma.com/img/2f04/9cd2/9df0f4994606c0e4123caf8c23729c70?Expires=1691971200&Signature=S3Jnp1sUZFbnQRFZkKtNPRNPSM-lIzCBWQSD1Qath7KvMh9cDZTsrt2CRqUgMCoq~16RhGQ~qmXpCPJOoNrUrmjEd2y7vZYXOLQvlDGmefWtN4HNrmd6Vw7QNf2HxRw0L0r8LrS4FyH2tThlri~EGSxd6353eS9maF3W0J9QjDu-Ka4oLrGFystNDUoHVthkfTvzLLGdank5fYq67M3E6cY-w2KUZIZlNi36tELY5eVWGTnX7HVBB32RtjZOnAukk2kpLlNHF5W229V0lGZO0W8hYTVLKqH0t~HHOX~pv-~cYE4V8c4Olw8sWcVicD0POCJbwJI55Vc1LIBPtjbShg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: 'teste'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/2f04/9cd2/9df0f4994606c0e4123caf8c23729c70?Expires=1691971200&Signature=S3Jnp1sUZFbnQRFZkKtNPRNPSM-lIzCBWQSD1Qath7KvMh9cDZTsrt2CRqUgMCoq~16RhGQ~qmXpCPJOoNrUrmjEd2y7vZYXOLQvlDGmefWtN4HNrmd6Vw7QNf2HxRw0L0r8LrS4FyH2tThlri~EGSxd6353eS9maF3W0J9QjDu-Ka4oLrGFystNDUoHVthkfTvzLLGdank5fYq67M3E6cY-w2KUZIZlNi36tELY5eVWGTnX7HVBB32RtjZOnAukk2kpLlNHF5W229V0lGZO0W8hYTVLKqH0t~HHOX~pv-~cYE4V8c4Olw8sWcVicD0POCJbwJI55Vc1LIBPtjbShg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: 'teste'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/2f04/9cd2/9df0f4994606c0e4123caf8c23729c70?Expires=1691971200&Signature=S3Jnp1sUZFbnQRFZkKtNPRNPSM-lIzCBWQSD1Qath7KvMh9cDZTsrt2CRqUgMCoq~16RhGQ~qmXpCPJOoNrUrmjEd2y7vZYXOLQvlDGmefWtN4HNrmd6Vw7QNf2HxRw0L0r8LrS4FyH2tThlri~EGSxd6353eS9maF3W0J9QjDu-Ka4oLrGFystNDUoHVthkfTvzLLGdank5fYq67M3E6cY-w2KUZIZlNi36tELY5eVWGTnX7HVBB32RtjZOnAukk2kpLlNHF5W229V0lGZO0W8hYTVLKqH0t~HHOX~pv-~cYE4V8c4Olw8sWcVicD0POCJbwJI55Vc1LIBPtjbShg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: 'teste'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/c078/d33b/27a62fe67efdb2187d09da6fae2a08e4?Expires=1691971200&Signature=fi3VXK8ukAdWm6c3~aQ57qNHw45VOaPU15zv-p~5B6UoQnysUQ3ufo8zBskXfIDcu45pu9wdqITF7kK08LJZme7-Wvia9leoNl~sMXe6rtUiMNsoTv8UCB8uWlvhMtTR3AALIyJ67xTRIGNdGFzjb~DBB~THnhkxNTG9sN27cL-MTvN8m1kVUtrtaU-AigJf4BK4rxQLwIHNMDnn3j2Dk-lPglSbW2Rz71v5y~JLgwtMjYfBVPWFV9ceF6Wv6bVcU5FeMG8qXcoCnjhm7tT2PO1huS2~zjqgwlC~-Zv4hrsfhPv4kFWAYd8W3LiLGAnSNnw5P1BZBpWSGZQGc-qhtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: 'teste'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/2f04/9cd2/9df0f4994606c0e4123caf8c23729c70?Expires=1691971200&Signature=S3Jnp1sUZFbnQRFZkKtNPRNPSM-lIzCBWQSD1Qath7KvMh9cDZTsrt2CRqUgMCoq~16RhGQ~qmXpCPJOoNrUrmjEd2y7vZYXOLQvlDGmefWtN4HNrmd6Vw7QNf2HxRw0L0r8LrS4FyH2tThlri~EGSxd6353eS9maF3W0J9QjDu-Ka4oLrGFystNDUoHVthkfTvzLLGdank5fYq67M3E6cY-w2KUZIZlNi36tELY5eVWGTnX7HVBB32RtjZOnAukk2kpLlNHF5W229V0lGZO0W8hYTVLKqH0t~HHOX~pv-~cYE4V8c4Olw8sWcVicD0POCJbwJI55Vc1LIBPtjbShg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: 'teste'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/2f04/9cd2/9df0f4994606c0e4123caf8c23729c70?Expires=1691971200&Signature=S3Jnp1sUZFbnQRFZkKtNPRNPSM-lIzCBWQSD1Qath7KvMh9cDZTsrt2CRqUgMCoq~16RhGQ~qmXpCPJOoNrUrmjEd2y7vZYXOLQvlDGmefWtN4HNrmd6Vw7QNf2HxRw0L0r8LrS4FyH2tThlri~EGSxd6353eS9maF3W0J9QjDu-Ka4oLrGFystNDUoHVthkfTvzLLGdank5fYq67M3E6cY-w2KUZIZlNi36tELY5eVWGTnX7HVBB32RtjZOnAukk2kpLlNHF5W229V0lGZO0W8hYTVLKqH0t~HHOX~pv-~cYE4V8c4Olw8sWcVicD0POCJbwJI55Vc1LIBPtjbShg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: 'teste'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/2f04/9cd2/9df0f4994606c0e4123caf8c23729c70?Expires=1691971200&Signature=S3Jnp1sUZFbnQRFZkKtNPRNPSM-lIzCBWQSD1Qath7KvMh9cDZTsrt2CRqUgMCoq~16RhGQ~qmXpCPJOoNrUrmjEd2y7vZYXOLQvlDGmefWtN4HNrmd6Vw7QNf2HxRw0L0r8LrS4FyH2tThlri~EGSxd6353eS9maF3W0J9QjDu-Ka4oLrGFystNDUoHVthkfTvzLLGdank5fYq67M3E6cY-w2KUZIZlNi36tELY5eVWGTnX7HVBB32RtjZOnAukk2kpLlNHF5W229V0lGZO0W8hYTVLKqH0t~HHOX~pv-~cYE4V8c4Olw8sWcVicD0POCJbwJI55Vc1LIBPtjbShg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: 'teste'
  }]
  return (
    <>
      <Header />
      {/* Carrossel rotativo */}
      <div className="py-4">
        <IconsCarrossel />
      </div>
      <ProductImgs thumbs={images} mainImage="https://s3-alpha-sig.figma.com/img/2f04/9cd2/9df0f4994606c0e4123caf8c23729c70?Expires=1691971200&Signature=S3Jnp1sUZFbnQRFZkKtNPRNPSM-lIzCBWQSD1Qath7KvMh9cDZTsrt2CRqUgMCoq~16RhGQ~qmXpCPJOoNrUrmjEd2y7vZYXOLQvlDGmefWtN4HNrmd6Vw7QNf2HxRw0L0r8LrS4FyH2tThlri~EGSxd6353eS9maF3W0J9QjDu-Ka4oLrGFystNDUoHVthkfTvzLLGdank5fYq67M3E6cY-w2KUZIZlNi36tELY5eVWGTnX7HVBB32RtjZOnAukk2kpLlNHF5W229V0lGZO0W8hYTVLKqH0t~HHOX~pv-~cYE4V8c4Olw8sWcVicD0POCJbwJI55Vc1LIBPtjbShg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      />
    </>

  )
}