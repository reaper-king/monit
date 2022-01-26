<script>

export let server = 'cs server' ;
export let fs_data = []
 const   year = new Date().getFullYear()
</script>

<div marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
    <!--100% body table-->
    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
        style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
        <tr>
            <td>
                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                    align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                          <a href="https://www.stor-systems.com/" title="logo" target="_blank">
                            <img width="200" src="http://cdn.mcauto-images-production.sendgrid.net/730cb00c41d13524/b5d947c7-a42c-4099-a4d0-962c228059f7/3203x1011.png" title="logo" alt="logo">
                          </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding:0 35px;">
                                        <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">{server}</h1>
                                                          </td>
                                </tr>
                                <tr>
                                    <td width="92%" style="padding: 4%;">
                                                    <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                                        <tr>
                                                            <td valign="top" align="left" style="padding: 10px 0; font-family: sans-serif; font-size: 15px; line-height: 1.3; color: #333333; font-weight: bold; border-bottom: 1px solid #cccccc" class="data-table-th">
                                                                Filesystem
                                                            </td>
                                                            <td valign="top" align="left" style="padding: 10px 0; font-family: sans-serif; font-size: 15px; line-height: 1.3; color: #333333; font-weight: bold; border-bottom: 1px solid #cccccc" class="data-table-th">
                                                                Size
                                                            </td>
                                                            <td valign="top" align="left" style="padding: 10px 0; font-family: sans-serif; font-size: 15px; line-height: 1.3; color: #333333; font-weight: bold; border-bottom: 1px solid #cccccc" class="data-table-th">
                                                                Used
                                                            </td>
                                                            <td valign="top" align="left" style="padding: 10px 0; font-family: sans-serif; font-size: 15px; line-height: 1.3; color: #333333; font-weight: bold; border-bottom: 1px solid #cccccc" class="data-table-th">
                                                                Available
                                                            </td>
                                                            <td valign="top" align="left" style="padding: 10px 0; font-family: sans-serif; font-size: 15px; line-height: 1.3; color: #333333; font-weight: bold; border-bottom: 1px solid #cccccc" class="data-table-th">
                                                                Used %
                                                            </td>
                                                            <td valign="top" align="left" style="padding: 10px 0; font-family: sans-serif; font-size: 15px; line-height: 1.3; color: #333333; font-weight: bold; border-bottom: 1px solid #cccccc" class="data-table-th">
                                                                Mounted On
                                                            </td>
                                                        </tr>
                                                        {#each fs_data as item}
                                                        <tr>
                                                            <td valign="top" align="left" style="padding: 10px 0; font-family: sans-serif; font-size: 15px; line-height: 1.3; color: #333333; border-bottom: 1px solid #eeeeee" class="data-table-td-title">
                                                              

{#if item.fs.length > 20}
                                                                 {'...' + item.fs.substring(item.fs.length - 15)}
                                                {:else}
                                                                 {item.fs}
                                                {/if}

                                                            </td>
                                                            <td valign="top" align="left" style="padding: 10px 0; font-family: sans-serif; font-size: 15px; line-height: 1.3; color: #333333; border-bottom: 1px solid #eeeeee" class="data-table-td">
                                                                {item.size}
                                                            </td>
                                                            <td valign="top" align="left" style="padding: 10px 0; font-family: sans-serif; font-size: 15px; line-height: 1.3; color: #333333; border-bottom: 1px solid #eeeeee" class="data-table-td">
                                                                {item.used}
                                                            </td>
                                                            <td valign="top" align="left" style="padding: 10px 0; font-family: sans-serif; font-size: 15px; line-height: 1.3; color: #333333; border-bottom: 1px solid #eeeeee" class="data-table-td">
                                                                {item.avail}
                                                            </td>
                                                            <td valign="top" align="left" style="padding: 10px 0; font-family: sans-serif; font-size: 15px; line-height: 1.3; color: #333333; border-bottom: 1px solid #eeeeee" class="data-table-td">
                                                                {item.use_perc}
                                                            </td>
                                                            <td valign="top" align="left" style=" word-wrap: break-word; padding: 10px 0; font-family: sans-serif; font-size: 15px; line-height: 1.3; color: #333333; border-bottom: 1px solid #eeeeee" class="data-table-td">
                                                                
						{#if item.mount.length > 30}
								 {'...' + item.mount.substring(item.mount.lastIndexOf('/') - 12)}
						{:else}
								 {item.mount}
						{/if}
                                                            </td>
                                                            <td style="display: none;" class="data-table-mobile-divider">&nbsp;</td>
                                                        </tr>
                                                        {/each}
                                                        
                                                    </table>
                                    </td>
                                  </tr>
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                            <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>Copyright  {year} | All Rights Reserved | Stor-Systems Ltd.</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                       
                    </tr>
                     
                </table>
            </td>
        </tr>
    </table>
    <!--/100% body table-->
</div>
