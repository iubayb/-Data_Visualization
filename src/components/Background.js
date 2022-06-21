import Image from 'next/image'

const Background = () => (
  <div>
    <div className={"bgWrap"}>
      <Image
        alt="Background Image"
        src="/images/it.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  </div>
)

export default Background