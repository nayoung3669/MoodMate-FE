import InactiveFirstText from '@/_components/inactive/containers/InactiveFirstText'
import InactiveMiddleText from '@/_components/inactive/containers/InactiveMiddleText'
import Image from 'next/image'
import logo from 'public/illustration/common/logo/graylogo.png'
import inactive from 'public/illustration/female/main/inactive.png'

interface ChatProps {
  roomId: number
  userId: number
  roomActive: boolean
  gender: 'MALE' | 'FEMALE'
}
export default function InactivePage({
  roomId,
  userId,
  roomActive,
  gender,
}: ChatProps) {
  return (
    <section className="flex flex-col h-screen">
      <Image
        src={logo}
        alt="graylogo"
        className="w-[85px] h-[13px] mt-5 mb-12 mx-auto"
      />
      <InactiveFirstText />
      <Image
        src={inactive}
        alt="inactive"
        className="mx-auto w-[150px] h-[220px] mt-7 mb-5"
      />
      <InactiveMiddleText
        gender={gender}
        roomId={roomId}
        roomActive={roomActive}
        userId={userId}
      />
    </section>
  )
}
