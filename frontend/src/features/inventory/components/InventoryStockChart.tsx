import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/shared/components/ui/card';
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/shared/components/ui/chart';

import {
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    ResponsiveContainer,
} from 'recharts';

type Data = { label: string; value: number }[];

const InventoryStockChart = ({
    data,
    isLoading,
}: {
    data: Data;
    isLoading: boolean;
}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Stock Movement</CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
                {isLoading ? (
                    <div className="h-60 w-full animate-pulse bg-slate-200 rounded-sm" />
                ) : (
                    <ChartContainer
                        config={{
                            value: {
                                label: 'Stock Movement',
                                color: '#3b82f6',
                            },
                        }}
                        className="h-60 w-full"
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                data={data}
                                margin={{ left: 20, right: 20 }}
                            >
                                <CartesianGrid vertical={false} />

                                <XAxis
                                    dataKey="label"
                                    fontSize={11}
                                    tickMargin={12}
                                    interval={0}
                                />

                                <ChartTooltip
                                    content={
                                        <ChartTooltipContent indicator="dot" />
                                    }
                                />

                                <Area
                                    dataKey="value"
                                    type="monotone"
                                    fill="var(--color-primary)"
                                    stroke="var(--color-primary)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                )}
            </CardContent>
        </Card>
    );
};

export default InventoryStockChart;
