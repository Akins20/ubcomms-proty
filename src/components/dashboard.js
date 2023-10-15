import Header from "./Header";

function Dashboard() {
  {
    return (
      <div>
        <Header />
        <div class="row">
          <div class="col-md-6">
            <h2>Messaging</h2>
            <form id="messaging-form">
              <div class="form-group">
                <label for="recipient">Recipient:</label>
                <input
                  type="text"
                  class="form-control"
                  id="recipient"
                  required
                />
              </div>
              <div class="form-group">
                <label for="message">Message:</label>
                <textarea class="form-control" id="message" required></textarea>
              </div>
              <button type="button" class="btn btn-primary" id="send-message">
                Send Message
              </button>
            </form>
          </div>

          <div class="col-md-6">
            <h2>Communication Channels</h2>
            <ul id="communication-channels" class="list-group">
              <li class="list-group-item">Channel 1</li>
              <li class="list-group-item">Channel 2</li>
              <li class="list-group-item">Channel 3</li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div id="analytics">
              <h2>Analytics</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
