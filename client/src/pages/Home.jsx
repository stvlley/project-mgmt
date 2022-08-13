import AddClientModal from "../components/AddClientModal"
import Projects from "../components/Projects"
import Clients from "../components/Clients"



export default function Home() {
  return (
    <>
        <AddClientModal />
          <Projects />
          <Clients />
    </>
  )
}
