import { SiHyperskill } from "react-icons/si";
const Skill = () => {
  return (
    <div id="Skill">
      <div class="my-5">
        <div class="p-5 text-center bg-body-tertiary">
          <div class="container py-5">
            <h1 class="text-body-emphasis">
              <SiHyperskill /> Skill
            </h1>
            <div class="w-25 p-3 Skill1">HTML5 25%</div>
            <div class="w-50 p-3 Skill1">CSS 50%</div>
            <div class="w-75 p-3 Skill1">Javasript 75%</div>
            <div class="w-50  p-3 Skill1">React-js 75%</div>
            <div class="w-75 p-3 Skill1">
              java & Data Structure Algorithm 75%
            </div>
            <div class="w-75 p-3 Skill1">Bootstrap 5 75%</div>
            <p class="col-lg-8 mx-auto lead"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skill;
