import { Fragment } from "react"
import IProfessional from "../../types/IProfessional"
import Card from "./Card"
import { SectionCard } from "./styles"
import { Button } from "../Button"

const Evaluation = ({ professionals }: { professionals: IProfessional[] | null }) => {
    return (
        <Fragment>
            <SectionCard>
                {professionals?.map((professional) => {
                    return <Card professional={professional} />
                })}
            </SectionCard>
            <Button>See More</Button>
        </Fragment>
    )
}

export default Evaluation