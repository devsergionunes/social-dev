import { Aside } from "../../components/Aside/Aside"
import { Feed } from "../../components/Feed/Feed"
import { Profile } from "../../components/Profile/Profile"
import { HomeContent } from "./HomeStyle"

export function Home() {
  return (
    <HomeContent>
      <Profile/>
      <Feed />
      <Aside/>
    </HomeContent>
  )
}