//danah
function Section4() {
  return (
    <section className="w-full bg-[#FAFAFA] pb-16 relative mx-auto flex justify-center items-center flex-col gap-10 -top-16">
      <div className="w-3/4 mx-auto bg-white rounded-lg shadow-lg p-6 md:p-12 pt-12 text-grey z-20">
        <div className="text-3xl font-semibold mb-12 text-center">
          <h1>Different areas of expertise, one powerful team</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-auto w-auto">
          {/* Row 1 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Design</h2>
            <p>
              We&apos;re scientists, artists, communicators, technologists, and human-centred problem solvers focused on designing things all people
              will love.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Software Development</h2>
            <p>
              We believe in the power of data over intuition, and we lead the charge in embedding this data-driven approach into everything our teams
              build.
            </p>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Product Ownership</h2>
            <p>
              We spend our days focused on driving acquisition, growth, and sales through our digital channels — all with a focus on data-driven
              optimization and personalization.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Data and Analytics</h2>
            <p>
              We take ownership of business objectives and translate them into digital priorities, building excellence in the global digital customer
              experience.
            </p>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">AI & Machine Learning</h2>
            <p>We work to identify real-life problems and solve them with technology to change the way our customers bank, one release at a time.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Management</h2>
            <p>
              The Platform Organization builds modern technology platforms that enable our teams to develop applications quickly, securely, and
              efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
