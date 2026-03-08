export default function AdminDashboard() {
  return (
    <div className="p-6 space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-base-content/70">
          Manage jobs, users, and applications from here.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="stats shadow bg-base-100">
          <div className="stat">
            <div className="stat-title">Total Jobs</div>
            <div className="stat-value text-primary">24</div>
            <div className="stat-desc">All posted jobs</div>
          </div>
        </div>

        <div className="stats shadow bg-base-100">
          <div className="stat">
            <div className="stat-title">Total Applications</div>
            <div className="stat-value text-secondary">96</div>
            <div className="stat-desc">All user applications</div>
          </div>
        </div>

        <div className="stats shadow bg-base-100">
          <div className="stat">
            <div className="stat-title">Total Users</div>
            <div className="stat-value text-accent">48</div>
            <div className="stat-desc">Registered users</div>
          </div>
        </div>

        <div className="stats shadow bg-base-100">
          <div className="stat">
            <div className="stat-title">Active Jobs</div>
            <div className="stat-value text-success">18</div>
            <div className="stat-desc">Currently open</div>
          </div>
        </div>

      </div>


      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Create Job</h2>
            <p>Post a new job opportunity.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">
                Create
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Manage Users</h2>
            <p>View and manage registered users.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary btn-sm">
                View Users
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Applications</h2>
            <p>Review job applications.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent btn-sm">
                View Applications
              </button>
            </div>
          </div>
        </div>

      </div>


      {/* Recent Jobs */}
      <div className="card bg-base-100 shadow">

        <div className="card-body">

          <h2 className="card-title">
            Recent Jobs
          </h2>

          <div className="overflow-x-auto">

            <table className="table table-zebra">

              <thead>
                <tr>
                  <th>Job</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Posted</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>React Developer</td>
                  <td>TechSoft Ltd</td>
                  <td>Dhaka</td>
                  <td>
                    <span className="badge badge-success">
                      Active
                    </span>
                  </td>
                  <td>2 days ago</td>
                </tr>

                <tr>
                  <td>Next.js Engineer</td>
                  <td>DevStack</td>
                  <td>Remote</td>
                  <td>
                    <span className="badge badge-warning">
                      Pending
                    </span>
                  </td>
                  <td>3 days ago</td>
                </tr>

                <tr>
                  <td>Frontend Developer</td>
                  <td>CodeLab</td>
                  <td>Chittagong</td>
                  <td>
                    <span className="badge badge-error">
                      Closed
                    </span>
                  </td>
                  <td>1 week ago</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>


      {/* Recent Applications */}
      <div className="card bg-base-100 shadow">

        <div className="card-body">

          <h2 className="card-title">
            Recent Applications
          </h2>

          <div className="overflow-x-auto">

            <table className="table table-zebra">

              <thead>
                <tr>
                  <th>User</th>
                  <th>Job</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>John Doe</td>
                  <td>React Developer</td>
                  <td>
                    <span className="badge badge-warning">
                      Pending
                    </span>
                  </td>
                  <td>Today</td>
                </tr>

                <tr>
                  <td>Sarah Smith</td>
                  <td>Next.js Engineer</td>
                  <td>
                    <span className="badge badge-success">
                      Accepted
                    </span>
                  </td>
                  <td>Yesterday</td>
                </tr>

                <tr>
                  <td>David Lee</td>
                  <td>Frontend Developer</td>
                  <td>
                    <span className="badge badge-error">
                      Rejected
                    </span>
                  </td>
                  <td>2 days ago</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  )
}