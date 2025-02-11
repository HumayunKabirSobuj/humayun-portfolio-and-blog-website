import Spline from '@splinetool/react-spline';

export default function RobotAnimation2() {
  return (
    <main className=" w-full lg:flex hidden lg:pb-14">
      <Spline
        scene={process.env.ROBOT_ANIMATION as string}
        className="h-full w-full"
      />
    </main>
  );
}
