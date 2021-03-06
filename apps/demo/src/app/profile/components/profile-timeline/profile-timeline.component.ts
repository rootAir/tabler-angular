import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-profile-timeline',
  template: `
    <div class="card">
      <div class="card-header">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Message">
          <div class="input-group-append">
            <button type="button" class="btn btn-secondary">
              <i class="fe fe-camera"></i>
            </button>
          </div>
        </div>
      </div>
      <ul class="list-group card-list-group">
        <li class="list-group-item py-5">
          <div class="media">
            <ui-avatar size="md" [image]="timeline[4].photo" class="m-3 p-4"></ui-avatar>
            <div class="media-body">
              <div class="media-heading">
                <small class="float-right text-muted">4 min</small>
                <h5>{{ timeline[ 4 ].name }} {{ timeline[ 4 ].surname }}</h5>
              </div>

              <div>
                Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi
                leo risus, porta ac consectetur ac, vestibulum at eros. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </div>

              <ul class="media-list">
                <li class="media m-3 p-4">
                  <ui-avatar size="md" [image]="timeline[7].photo" class="p-4"></ui-avatar>
                  <div class="media-body">
                    <strong>{{ timeline[ 7 ].name }} {{ timeline[ 7 ].surname }}: </strong>
                    Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum
                    faucibus dolor auctor. Donec ullamcorper nulla non metus
                    auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere
                    consectetur est at lobortis.
                  </div>
                </li>
                <li class="media m-3 p-4">
                  <ui-avatar size="md" [image]="timeline[9].photo" class="p-4"></ui-avatar>
                  <div class="media-body">
                    <strong>{{ timeline[ 9 ].name }} {{ timeline[ 9 ].surname }}: </strong>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo,
                    tortor mauris condimentum nibh, ut fermentum massa justo sit
                    amet risus.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
        </li>
        <li class="list-group-item py-5">
          <div class="media">
            <ui-avatar size="md" [image]="timeline[4].photo" class="m-3 p-4"></ui-avatar>
            <div class="media-body">
              <div class="media-heading">
                <small class="float-right text-muted">12 min</small>
                <h5>{{ timeline[ 4 ].name }} {{ timeline[ 4 ].surname }}</h5>
              </div>
              <div>
                Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere
                velit aliquet. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </li>
        <li class="list-group-item py-5">
          <div class="media">
            <ui-avatar size="md" [image]="timeline[4].photo" class="m-3 p-4"></ui-avatar>
            <div class="media-body">
              <div class="media-heading">
                <small class="float-right text-muted">34 min</small>
                <h5>{{ timeline[ 4 ].name }} {{ timeline[ 4 ].surname }}</h5>
              </div>

              <div>
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
              </div>

              <ul class="media-list">
                <li class="media m-3 p-4">
                  <ui-avatar size="sm" [image]="timeline[5].photo" class="p-4"></ui-avatar>
                  <div class="media-body">
                    <strong>{{ timeline[ 5 ].name }} {{ timeline[ 5 ].surname }}: </strong>
                    Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum
                    faucibus dolor auctor. Donec ullamcorper nulla non metus
                    auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere
                    consectetur est at lobortis.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>

  `,
  styles: []
})
export class ProfileTimelineComponent implements OnInit {

  @Input() public timeline = []

  constructor() {
  }

  ngOnInit() {
  }

}
