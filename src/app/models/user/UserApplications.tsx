/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export default function UserApplications({ applications }: { applications: any[] }) {

  if (!applications || applications.length === 0) {
    return <div className="p-4">No applications found.</div>;
  }

  return (
    <div className="overflow-x-auto p-4">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Resume</th>
            <th>Cover Note</th>
            <th>Status</th>
            <th>Applied At</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app, index) => (
            <tr key={app.id}>
              <th>{index + 1}</th>

              {/* Resume Link */}
              <td>
                <a
                  href={app.resume_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-primary"
                >
                  View Resume
                </a>
              </td>

              {/* Cover Note */}
              <td className="max-w-xs truncate">
                {app.cover_note}
              </td>

              {/* Status */}
              <td>
                <span
                  className={`badge ${
                    app.status === "PENDING"
                      ? "badge-warning"
                      : app.status === "ACCEPTED"
                      ? "badge-success"
                      : "badge-error"
                  }`}
                >
                  {app.status}
                </span>
              </td>

              {/* Date */}
              <td>
                {new Date(app.created_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}