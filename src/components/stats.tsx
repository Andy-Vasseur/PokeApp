interface StatsProps {
    value: number;
    label: string;
  }
  export default function Stats({ value, label }: StatsProps) {
    return (<>
      <span className="text-white text-md font-bold">{label}</span>
      <span className="text-center text-white text-md font-bold">{value}</span>
    </>)
}