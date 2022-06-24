using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web.Services;
using System.Web.UI.WebControls;
using WebApplication1.Models;

namespace WebApplication1
{
    public partial class index : System.Web.UI.Page
    {
        private const int SL = 10;
        private const double G = 10000.0;

        protected void Page_Load(object sender, EventArgs e)
        {
            Start();
        }

        public static void Start()
        {

            try
            {
                SqlClientPermission ss = new SqlClientPermission(System.Security.Permissions.PermissionState.Unrestricted);
                ss.Demand();
            }
            catch (Exception)
            {
                throw;
            }

            SqlDependency.Start(ConfigurationManager.ConnectionStrings["Database"].ConnectionString);

            GetDataAll();
        }

        public static void Stop()
        {
            SqlDependency.Stop(ConfigurationManager.ConnectionStrings["Database"].ConnectionString);
        }

        [WebMethod]
        public static IEnumerable<BangGia> GetDataAll()
        {

            using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["Database"].ConnectionString))
            {

                string querryStr = @"SELECT [MACP]
                                                                      ,[GTC]
                                                                      ,[GMUA3]
                                                                      ,[SLMUA3]
                                                                      ,[GMUA2]
                                                                      ,[SLMUA2]
                                                                      ,[GMUA1]
                                                                      ,[SLMUA1]
                                                                      ,[GIAKHOP]
                                                                      ,[SOLUONGKHOP]
                                                                      ,[GBAN1]
                                                                      ,[SLBAN1]
                                                                      ,[GBAN2]
                                                                      ,[SLBAN2]
                                                                      ,[GBAN3]
                                                                      ,[SLBAN3]
                                                                      ,[TONGSLKHOP]
                                                                  FROM [dbo].[BANGGIATRUCTUYEN]";

                connection.Open();

                SqlCommand sqlCommand = new SqlCommand(querryStr, connection);

                SqlDependency dependency = new SqlDependency(sqlCommand);
                dependency.OnChange += OnchangeDatabase;

                using (SqlDataReader reader = sqlCommand.ExecuteReader())
                {
                    return reader.Cast<IDataRecord>()
                        .Select(x => new BangGia()
                        {

                            MACP = (string)x["MACP"],
                            GTC = (double)x["GTC"] / G,
                            GMUA3 = (double)x["GMUA3"] / G,
                            SLMUA3 = (int)x["SLMUA3"] / SL,
                            GMUA2 = (double)x["GMUA2"] / G,
                            SLMUA2 = (int)x["SLMUA2"] / SL,
                            GMUA1 = (double)x["GMUA1"] / G,
                            SLMUA1 = (int)x["SLMUA1"] / SL,
                            GIAKHOP = (double)x["GIAKHOP"] / G,
                            SOLUONGKHOP = (int)x["SOLUONGKHOP"] / SL,
                            GBAN1 = (double)x["GBAN1"] / G,
                            SLBAN1 = (int)x["SLBAN1"] / SL,
                            GBAN2 = (double)x["GBAN2"] / G,
                            SLBAN2 = (int)x["SLBAN2"] / SL,
                            GBAN3 = (double)x["GBAN3"] / G,
                            SLBAN3 = (int)x["SLBAN3"] / SL,
                            TONGSLKHOP = (int)x["TONGSLKHOP"] / SL

                        }).ToList();
                }
            }

        }

        private static void OnchangeDatabase(object sender, SqlNotificationEventArgs e)
        {

            if (e.Info != SqlNotificationInfo.Invalid)
            {
                MyHub.Show();
            }

        }

        [WebMethod]
        public static void Page_Close()
        {
            Stop();
        }

    }
}