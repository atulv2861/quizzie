import React from "react";
import SidebarComponent from "../Sidebar/SidebarComponent";
import DashboardComponent from "../Dashboard/DashboardComponent";
import AnalyticsComponent from "../Analytics/AnalyticsComponent";
import CreateQuizComponent from "../CreateQuiz/CreateQuizComponent";
import QuestionsAnalysisComponent from "../Analytics/QuestionAnalysis/QuestionsAnalysisComponent";
import Style from "./DashboardPanelComponent.module.css";
import { Routes, Route } from "react-router-dom";
export default function DashboardPanelComponent() {

    return (<>
        <div className={Style.Wrapper}>
            <SidebarComponent />
        </div>
        <div>
            <Routes>
                <Route path="dashboard" element={<DashboardComponent />} />
                <Route path="analytics" element={<AnalyticsComponent />} />
                <Route path="create-quiz" element={<CreateQuizComponent />} />
                <Route path="question-wise-analysis" element={QuestionsAnalysisComponent}/>
            </Routes>
        </div>
    </>
    )
}