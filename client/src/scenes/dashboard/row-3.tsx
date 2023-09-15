import BoxHeader from "@/components/box-header";
import DashboardBox from "@/components/dashboard-box";
import FlexBetween from "@/components/flex-between";
import {
	useGetKpisQuery,
	useGetProductsQuery,
	useGetTransactionsQuery,
} from "@/state/api";
import { useCustomTheme } from "@/theme";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useMemo } from "react";
import { Cell, Pie, PieChart } from "recharts";

const Row3 = () => {
	const palettes = useCustomTheme();
	const pieColours = [
		palettes.palette.primary.semiblack,
		palettes.palette.primary.semidark,
	];
	const { data: kpiData } = useGetKpisQuery();
	const { data: productData } = useGetProductsQuery();
	const { data: transactionData } = useGetTransactionsQuery();

	const pieChartData = useMemo(() => {
		if (kpiData) {
			const totalExpenses = kpiData[0].totalExpenses;
			return Object.entries(kpiData[0].expensesByCategory).map(
				([key, value]) => {
					return [
						{
							name: key,
							value,
						},
						{
							name: `${key} of Total`,
							value: totalExpenses - value,
						},
					];
				}
			);
		}
	}, [kpiData]);

	const productColumns = [
		{
			field: "_id",
			headerName: "Id",
			flex: 1,
		},
		{
			field: "expense",
			headerName: "Expense",
			flex: 0.5,
			renderCell: (params: GridCellParams) => `$${params.value}`,
		},
		{
			field: "price",
			headerName: "Price",
			flex: 0.5,
			renderCell: (params: GridCellParams) => `$${params.value}`,
		},
	];

	const transactionColumns = [
		{
			field: "_id",
			headerName: "Id",
			flex: 1,
		},
		{
			field: "buyer",
			headerName: "Buyer",
			flex: 0.67,
		},
		{
			field: "amount",
			headerName: "Amount",
			flex: 0.35,
			renderCell: (params: GridCellParams) => `$${params.value}`,
		},
		{
			field: "productIds",
			headerName: "Count",
			flex: 0.1,
			renderCell: (params: GridCellParams) =>
				(params.value as Array<string>).length,
		},
	];

	return (
		<>
			<DashboardBox gridArea="g">
				<BoxHeader
					title="List Of Products"
					sideText={`${productData?.length} products`}
				/>
				<Box
					mt="0.5rem"
					p="0 0.5rem"
					height="75%"
					sx={{
						"& .MuiDataGrid-root": {
							color: palettes.palette.grey.regular,
							border: "none",
						},
						"& .MuiDataGrid-cell": {
							borderBottom: `1px solid ${palettes.palette.grey.semiblack} !important`,
						},
						"& .MuiDataGrid-columnHeader": {
							borderBottom: `1px solid ${palettes.palette.grey.semiblack} !important`,
						},
						"& .MuiDataGrid-columnSeparator": { visibility: "hidden" },
					}}
				>
					<DataGrid
						columnHeaderHeight={25}
						rowHeight={35}
						hideFooter={true}
						rows={productData || []}
						columns={productColumns}
					/>
				</Box>
			</DashboardBox>

			<DashboardBox gridArea="h">
				<BoxHeader
					title="Recent Orders"
					sideText={`${transactionData?.length} latest transactions`}
				/>
				<Box
					mt="1rem"
					p="0 0.5rem"
					height="80%"
					sx={{
						"& .MuiDataGrid-root": {
							color: palettes.palette.grey.regular,
							border: "none",
						},
						"& .MuiDataGrid-cell": {
							borderBottom: `1px solid ${palettes.palette.grey.semiblack} !important`,
						},
						"& .MuiDataGrid-columnHeader": {
							borderBottom: `1px solid ${palettes.palette.grey.semiblack} !important`,
						},
						"& .MuiDataGrid-columnSeparator": { visibility: "hidden" },
					}}
				>
					<DataGrid
						columnHeaderHeight={25}
						rowHeight={35}
						hideFooter={true}
						rows={transactionData || []}
						columns={transactionColumns}
					/>
				</Box>
			</DashboardBox>

			<DashboardBox gridArea="i">
				<BoxHeader title="Expenses Brokendown By Category" sideText="+4%" />
				<FlexBetween textAlign="center">
					{pieChartData?.map((data, i) => (
						<Box key={`${data[0].name}-${i}`}>
							<PieChart width={110} height={90}>
								<Pie
									stroke="none"
									data={data}
									cy={40}
									// startAngle={180}
									// endAngle={0}
									innerRadius={18}
									outerRadius={35}
									paddingAngle={5}
									dataKey="value"
								>
									{data.map((_entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={pieColours[index % pieColours.length]}
										/>
									))}
								</Pie>
							</PieChart>
							<Typography variant="h5">{data[0].name}</Typography>
						</Box>
					))}
				</FlexBetween>
			</DashboardBox>

			<DashboardBox gridArea="j">
				<BoxHeader
					title="Overall Summary and Explanation Data"
					sideText="+15%"
				/>
				<Box
					height="15px"
					margin="1.25rem 1rem 0.4rem 1rem"
					bgcolor={palettes.palette.primary.semiblack}
					borderRadius="1rem"
				>
					<Box
						height="15px"
						bgcolor={palettes.palette.primary.dark}
						borderRadius="1rem"
						width="40%"
					/>
				</Box>
				<Typography
					margin="0 1rem"
					variant="h6"
					style={{
						maxWidth: "100%",
						maxHeight: "100%",
						whiteSpace: "pre-wrap",
						overflow: "hidden",
						textOverflow: "ellipsis",
						wordWrap: "break-word",
						fontSize: "0.55rem",
					}}
				>
					While a money market account can be a great place to stash some cash
					for short-term needs, high deposit and balance requirements and
					monthly fees may leave you looking for alternatives. Here are a few
					other options you may want to consider: High-yield savings accounts,
					CDs, Low-risk investments. As you consider your current financial
					needs and goals, take your time to research all of your options to
					determine which one is the best fit for you.
				</Typography>
			</DashboardBox>
		</>
	);
};

export default Row3;
