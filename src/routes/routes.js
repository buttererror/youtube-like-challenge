import Results from "../pages/Results/Results";

const routes = [
   {
      path: "/",
      name: "results",
      component: Results,
      children: [
         {
            path: "video",
            name: "video_page",
            // component: ""
         }
      ]
   }
]

export default routes;