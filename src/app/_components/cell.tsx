import { Input } from "@/components/ui/input"

type CellProps = {
    value: string
    onChange: (value: string) => void
}

export function Cell({value, onChange}: CellProps){
    return (
        <Input type="text" value={value} className="w-[50px] h-[50px] border-white border-[2px] rounded bg-primary" />
    )
}