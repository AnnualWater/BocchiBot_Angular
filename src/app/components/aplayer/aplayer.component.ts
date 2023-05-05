import { AfterContentInit, Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import APlayer from 'aplayer2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aplayer',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './aplayer.component.html',
  styleUrls: ['aplayer.component.scss']
})
export class APlayerComponent implements AfterContentInit {

  @Input() playerListId: string = '';
  @Input() server: string = 'netease';
  @Input() apiUrl: string = 'https://api.injahow.cn/meting/';
  @Input() fixed: boolean = false;
  @Input() autoPlay: boolean = false;
  player: any;


  constructor(private httpClient: HttpClient) {
  }

  ngAfterContentInit(): void {
    // 使用原生请求替代HttpClient防止拦截器加Token
    const request = new XMLHttpRequest();
    request.open('GET', `${this.apiUrl}?type=playlist&id=${this.playerListId}`);
    request.send();
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        let response = JSON.parse(request.responseText);
        this.player = new APlayer({
          container: document.getElementById('_a_player'),
          audio: response,
          fixed: this.fixed,
          autoplay: this.autoPlay,
          lrcType: 3
        });
      }
    };
    request.onerror = function(error) {
      console.log(error);
    };
    // HttpClient请求方式
    // this.httpClient.get(this.apiUrl, {
    //   params: {
    //     'type': 'playlist',
    //     'id': this.playerListId
    //   }
    // }).subscribe(response => {
    //     console.log(response);
    //     this.player = new APlayer({
    //       container: document.getElementById('_a_player'),
    //       audio: response,
    //       fixed: this.fixed,
    //       autoplay: this.autoPlay,
    //       lrcType: 3
    //     });
    //   }
    // );


  }

}
