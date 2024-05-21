import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { GraphicProps, IData } from "./interface"
import useDataGraphics from "../../Hooks/useDataGraphics"
import { SectionStyled } from "./styles"

const Graphic = ({professionals, consultations}: GraphicProps) => {
    let data: Array<IData> =  useDataGraphics({professionals, consultations})
    return (
        <SectionStyled>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    layout="vertical"
                    data={data}
                    margin={{top: 25, right: 40, left: 40, bottom: 20}}
                >
                    <XAxis type="number"></XAxis>
                    <YAxis type="category" dataKey="name"></YAxis>
                    <Bar dataKey="consultations" fill="#083860" barSize={30}></Bar>
                </BarChart>
            </ResponsiveContainer>
        </SectionStyled>
    )
}

export default Graphic