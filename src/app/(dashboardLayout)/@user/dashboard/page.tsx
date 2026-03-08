export default function UserDashboard() {
  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-base-content/70">
          Welcome back! Here’s your job application overview.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="stats shadow bg-base-100">
          <div className="stat">
            <div className="stat-title">Total Applications</div>
            <div className="stat-value text-primary">12</div>
            <div className="stat-desc">All job applications</div>
          </div>
        </div>

        <div className="stats shadow bg-base-100">
          <div className="stat">
            <div className="stat-title">Pending</div>
            <div className="stat-value text-warning">5</div>
            <div className="stat-desc">Waiting for response</div>
          </div>
        </div>

        <div className="stats shadow bg-base-100">
          <div className="stat">
            <div className="stat-title">Accepted</div>
            <div className="stat-value text-success">3</div>
            <div className="stat-desc">Congrats 🎉</div>
          </div>
        </div>

        <div className="stats shadow bg-base-100">
          <div className="stat">
            <div className="stat-title">Rejected</div>
            <div className="stat-value text-error">4</div>
            <div className="stat-desc">Keep trying 💪</div>
          </div>
        </div>

      </div>


      {/* Recent Activity */}
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title">Recent Applications</h2>

          <div className="overflow-x-auto">
            <table className="table table-zebra">

              <thead>
                <tr>
                  <th>Job</th>
                  <th>Status</th>
                  <th>Applied</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>React Developer</td>
                  <td>
                    <span className="badge badge-warning">
                      Pending
                    </span>
                  </td>
                  <td>2 days ago</td>
                </tr>

                <tr>
                  <td>Frontend Engineer</td>
                  <td>
                    <span className="badge badge-success">
                      Accepted
                    </span>
                  </td>
                  <td>5 days ago</td>
                </tr>

                <tr>
                  <td>Next.js Developer</td>
                  <td>
                    <span className="badge badge-error">
                      Rejected
                    </span>
                  </td>
                  <td>1 week ago</td>
                </tr>

              </tbody>

            </table>
          </div>

        </div>
      </div>


      {/* Profile Completion */}
      <div className="card bg-base-100 shadow">
        <div className="card-body">

          <h2 className="card-title">
            Profile Completion
          </h2>

          <progress
            className="progress progress-primary w-full"
            value="70"
            max="100"
          ></progress>

          <p className="text-sm text-base-content/70">
            Complete your profile to increase chances of getting hired.
          </p>

        </div>
      </div>

    </div>
  );
}