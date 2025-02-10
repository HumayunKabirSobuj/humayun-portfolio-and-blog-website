import Spline from '@splinetool/react-spline';

export default function RobotAnimation() {
  return (
    <main className="h-screen w-full my-10">
      <Spline
        scene={process.env.ROBOT_ANIMATION as string}
        className="h-full w-full"
      />
    </main>
  );
}
