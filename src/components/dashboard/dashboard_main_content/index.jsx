import React from 'react'
import GroupChart from './group_chart.jsx'
import MyExpenseCategoryChart from './expense_category_chart.jsx'
import ExpenseChart from './expense_chart.jsx'

const DashboardMainContent = () => {
    return (
        <>
            <h4 className="text-center mt-5 mb-2 shadow-5-strong p-2 fw-bolder">
                Expense Reports
            </h4>
            <div className="row p-2 justify-content-center">
                <div className="col-md-6 shadow p-2 my-2 justify-content-center">
                    <GroupChart />
                </div>
                <div className="col-md-6 shadow p-2 my-2 justify-content-center">
                    <GroupChart />
                </div>
            </div>
            <div className="row p-2 justify-content-center">
                <div className="col-md-6 shadow p-2 my-2 justify-content-center">
                    <MyExpenseCategoryChart />
                </div>
                <div className="col-md-6 shadow p-2 my-2 justify-content-center">
                    <ExpenseChart />
                </div>
            </div>
            {/*<h4 className="text-center mt-5 mb-3 shadow-5-strong p-2 fw-bolder">Latest Transactions</h4>*/}
            {/*<div className="my-2">*/}
            {/*    <TransactionCard/>*/}
            {/*</div>*/}
            {/*<div className="my-2">*/}
            {/*    <TransactionCard/>*/}
            {/*</div>*/}
            {/*<div className="my-2">*/}
            {/*    <TransactionCard/>*/}
            {/*</div>*/}
            {/*<h4 className="text-center mt-5 mb-3 shadow-5-strong p-2 fw-bolder">Budget Progress</h4>*/}
            {/*<BudgetProgress/>*/}
            {/*<h4 className="text-center mt-5 mb-3 shadow-5-strong p-2 fw-bolder">Settled Groups</h4>*/}
            {/*<MDBRow>*/}
            {/*    <MDBCol sm={6}> <SettledGroupCard/></MDBCol>*/}
            {/*    <MDBCol sm={6}> <SettledGroupCard/></MDBCol>*/}
            {/*</MDBRow>*/}
        </>
    )
}
export default DashboardMainContent
