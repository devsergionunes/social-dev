import { Aside } from "../../components/Aside/Aside"
import { Feed } from "../../components/Feed/Feed"
import { Profile } from "../../components/Profile/Profile"
import { ConteinerContent } from "./HomeStyle"

export function Conteiner() {
  return (
    <ConteinerContent>
      <Profile/>
      <Feed />
      <Aside/>
    </ConteinerContent>
  )
}